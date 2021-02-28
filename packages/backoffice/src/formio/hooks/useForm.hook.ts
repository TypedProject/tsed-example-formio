import {
  AuthState,
  deleteForm,
  FormSchema,
  getForm as getFormAction,
  receiveForm,
  refreshForms,
  resetSubmission,
  resetSubmissions,
  saveForm as saveFormAction,
  selectAuth,
  selectError,
  selectForm
} from "@tsed/react-formio";
import { push } from "connected-react-router";
import noop from "lodash/noop";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findRoute, getFormRoutes } from "../form.routes";
import { FormioViewOptions } from "../interfaces/FormioViewOptions";

export interface UseFormProps extends FormioViewOptions {
  formType: string;
  formId: string;
  formAction?: string;
}

export function useForm(props: UseFormProps) {
  const {
    basePath: path,
    formType,
    operations,
    onSuccess = noop,
    onError = noop
  } = props;

  let { formId, formAction = "edit" } = props;

  if (formId === "create") {
    formAction = "create";
    formId = undefined;
  }

  const type = formType.replace(/s$/, "");
  const basePath = path.replace(":formType", formType);
  const dispatch = useDispatch();

  const auth: AuthState = useSelector(selectAuth);
  const error = useSelector((state) => selectError(type, state));
  const form = useSelector((state) => selectForm(type, state));

  const getForm = useCallback(() => {
    if (formAction !== "create") {
      dispatch(resetSubmissions("submissions"));
      dispatch(resetSubmission("submission"));
      dispatch(getFormAction(type, formId));
    }
  }, [formType, formId]);

  const routes = useMemo(() => {
    return getFormRoutes({ operations, formAction, auth, form });
  }, [operations, formType, formId]);

  const [currentRoute, setCurrentRoute] = useState(
    findRoute(routes, formAction)
  );

  const onRemoveDone = useCallback(
    (err: Error) => {
      if (!err) {
        dispatch(refreshForms(formType));
        dispatch(push(basePath));
        onSuccess({
          name: `remove:${type}`,
          title: `${type} removed`,
          message: `The ${type} has been successfully removed!`,
          data: form._id
        });
      } else {
        onError({
          name: `remove:${type}`,
          title: `${type} failed`,
          message: err.message,
          error: err,
          data: form._id
        });
      }
    },
    [basePath, formType, form._id]
  );

  const removeForm = useCallback(() => {
    dispatch(deleteForm(formType, form._id, onRemoveDone));
  }, [formType, form._id, onRemoveDone]);

  const duplicateForm = useCallback(
    (form: FormSchema) => {
      dispatch(receiveForm(formType, { ...form, _id: undefined }));
      dispatch(push(`${basePath}/create`));
      onSuccess({
        name: `duplicate:${type}`,
        title: `${type} duplicated`,
        message: `The ${type} has been successfully duplicated!`,
        data: form
      });
    },
    [basePath, type, form]
  );

  const onSaveDone = useCallback(
    async (err: Error | null, updatedForm: FormSchema) => {
      if (!err) {
        dispatch(refreshForms(formType));

        dispatch(
          push(
            [
              basePath,
              updatedForm._id,
              formAction === "create" ? "edit" : formAction
            ].join("/")
          )
        );

        onSuccess({
          name: `${formAction}:${type}`,
          title: `${type} saved`,
          message: `The ${type} has been successfully updated!`,
          data: updatedForm
        });
      } else {
        onError({
          name: `${formAction}:${type}`,
          title: `Save ${type} failed`,
          message: err.message,
          error: err,
          data: form
        });
      }
    },
    [formType, formAction, form._id]
  );

  const saveForm = useCallback(
    (form: FormSchema) => {
      dispatch(saveFormAction(type, form, onSaveDone));
    },
    [formType, form._id, onSaveDone]
  );

  useEffect(() => {
    getForm();
  }, [formType, formId]);

  return {
    ...props,
    basePath,
    formId: form?._id || formId,
    formAction,
    auth,
    form,
    getForm,
    error,
    operations,
    routes,
    currentRoute,
    setCurrentRoute(item: any) {
      setCurrentRoute(findRoute(routes, item.action));

      if (item.back) {
        dispatch(push(basePath));
      } else {
        dispatch(push([basePath, formId, item.action].join("/")));
      }
    },
    saveForm,
    removeForm,
    duplicateForm,
    gotoEdit() {
      dispatch(push([basePath, formId, "edit"].join("/")));
    },
    gotoRemove() {
      dispatch(push([basePath, formId, "remove"].join("/")));
    }
  };
}
