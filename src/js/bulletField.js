import { createDiv, createElem } from './elmcreator';

export default function bulletField(value) {
  const FieldPriority = createDiv(['form-check', 'form-check-inline']);
  const Priority = createElem('input', `inlineRadio${value}`, [
    'form-check-input',
  ]);
  Priority.type = 'radio';
  Priority.setAttribute('name', 'inlineRadioOptions');
  Priority.setAttribute('value', `${value}`);
  const Priority1label = createElem('label', '', ['form-check-label']);
  Priority1label.setAttribute('for', `inlineRadio${value}`);
  Priority1label.innerText = `${value}`;

  FieldPriority.appendChild(Priority);
  FieldPriority.appendChild(Priority1label);
  return FieldPriority;
}
