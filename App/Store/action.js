export const TOKEN = 'TOKEN';
export const QRCODE = 'QRCODE';
export const NOTIFFICATIONS = 'NOTIFFICATIONS';
export const NEWS = 'NEWS';
export const NEWSCOMPONENT = 'NEWSCOMPONENT';

export function Token(data) {
  return {
    type: TOKEN,
    payload: data,
  };
}
// ----------------------------
export function SetQrCode(data) {
  return {
    type: QRCODE,
    payload: data,
  };
}
// ----------------------------
export function SetNotiff(data) {
  return {
    type: NOTIFFICATIONS,
    payload: data,
  };
}
// ----------------------------
export function SetNews(data) {
  return {
    type: NEWS,
    payload: data,
  };
}
// ----------------------------
export function SetNewsComponent(data) {
  return {
    type: NEWSCOMPONENT,
    payload: data,
  };
}
// ----------------------------
