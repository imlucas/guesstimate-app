export function openSettings(props) {
  return { type: 'MODAL_CHANGE', componentName: 'settings', props };
}

export function change({componentName, props}) {
  return { type: 'MODAL_CHANGE', componentName, props };
}

export function close() {
  return { type: 'MODAL_CLOSE' };
}
