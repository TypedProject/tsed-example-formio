import React from 'react'
import { Form } from '../../index'

export default {
  title: 'ReactFormio/TextField',
  component: Form,
  argTypes: {},
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
}

export const Sandbox = (args) => {
  return (
    <Form form={args.form} options={args.options}/>
  )
}

Sandbox.args = {
  form: {
    '_id': '6023f8fe4b1a2ab9a3aae096',
    'type': 'form',
    'tags': [],
    'owner': '5d0797a382461b6656d2c790',
    'components': [
      {
        'label': 'Label',
        'labelPosition': 'top',
        'placeholder': 'placeholder',
        'description': '',
        'tooltip': 'tootltip',
        'prefix': 'prefix',
        'suffix': 'suffix',
        'widget': { 'type': 'input' },
        'inputMask': '',
        'allowMultipleMasks': false,
        'customClass': '',
        'tabindex': '',
        'autocomplete': '',
        'hidden': false,
        'hideLabel': false,
        'showWordCount': false,
        'showCharCount': false,
        'mask': false,
        'autofocus': false,
        'spellcheck': true,
        'disabled': false,
        'tableView': true,
        'modalEdit': false,
        'multiple': false,
        'persistent': true,
        'inputFormat': 'plain',
        'protected': false,
        'dbIndex': false,
        'case': '',
        'encrypted': false,
        'redrawOn': '',
        'clearOnHide': true,
        'customDefaultValue': '',
        'calculateValue': '',
        'calculateServer': false,
        'allowCalculateOverride': false,
        'validateOn': 'change',
        'validate': {
          'required': false,
          'pattern': '',
          'customMessage': '',
          'custom': '',
          'customPrivate': false,
          'json': '',
          'minLength': '',
          'maxLength': '',
          'strictDateValidation': false,
          'multiple': false,
          'unique': false
        },
        'unique': false,
        'errorLabel': '',
        'key': 'label',
        'tags': [],
        'properties': {},
        'conditional': { 'show': null, 'when': null, 'eq': '', 'json': '' },
        'customConditional': '',
        'logic': [],
        'attributes': {},
        'overlay': { 'style': '', 'page': '', 'left': '', 'top': '', 'width': '', 'height': '' },
        'type': 'textfield',
        'input': true,
        'refreshOn': '',
        'inputType': 'text',
        'id': 'evpal99',
        'defaultValue': ''
      },
      {
        'type': 'button',
        'label': 'Submit',
        'key': 'submit',
        'size': 'md',
        'block': false,
        'action': 'submit',
        'disableOnInvalid': true,
        'theme': 'primary',
        'input': true,
        'placeholder': '',
        'prefix': '',
        'customClass': '',
        'suffix': '',
        'multiple': false,
        'defaultValue': null,
        'protected': false,
        'unique': false,
        'persistent': false,
        'hidden': false,
        'clearOnHide': true,
        'refreshOn': '',
        'redrawOn': '',
        'tableView': false,
        'modalEdit': false,
        'labelPosition': 'top',
        'description': '',
        'errorLabel': '',
        'tooltip': '',
        'hideLabel': false,
        'tabindex': '',
        'disabled': false,
        'autofocus': false,
        'dbIndex': false,
        'customDefaultValue': '',
        'calculateValue': '',
        'calculateServer': false,
        'widget': { 'type': 'input' },
        'attributes': {},
        'validateOn': 'change',
        'validate': {
          'required': false,
          'custom': '',
          'customPrivate': false,
          'strictDateValidation': false,
          'multiple': false,
          'unique': false
        },
        'conditional': { 'show': null, 'when': null, 'eq': '' },
        'overlay': { 'style': '', 'left': '', 'top': '', 'width': '', 'height': '' },
        'allowCalculateOverride': false,
        'encrypted': false,
        'showCharCount': false,
        'showWordCount': false,
        'properties': {},
        'allowMultipleMasks': false,
        'leftIcon': '',
        'rightIcon': '',
        'dataGridLabel': true,
        'id': 'e08gq3l'
      }],
    'title': 'text-field',
    'display': 'form',
    'name': 'textField',
    'path': 'textfield'
  },
  options: { template: 'bootstrap', iconset: 'fa' }
}
