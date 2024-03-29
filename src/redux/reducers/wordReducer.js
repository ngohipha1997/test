import {
  ACTION_TYPE_ADD_WORD,
  ACTION_TYPE_TOGGLE_WORD,
  ACTION_TYPE_REMOVE_WORD,
} from '../actions/index';

const defaultWords = [
  {id: 1, en: 'One', vn: 'Một', isMemorized: false},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
  {id: 4, en: 'Four', vn: 'Bốn', isMemorized: true},
  {id: 5, en: 'Five', vn: 'Năm', isMemorized: false},
];

export default function wordReducer(state = defaultWords, action) {
  if (action.type === ACTION_TYPE_ADD_WORD) {
    const newWords = state.map((word) => {
      return {...word};
    });
    newWords.push(action.newWord);
    return newWords;
  }
  if (action.type === ACTION_TYPE_TOGGLE_WORD) {
    const newWords = state.map((item) => {
      if (item.id === action.word.id) {
        return {...item, isMemorized: !item.isMemorized};
      }
      return item;
    });
    return newWords;
  }
  if (action.type === ACTION_TYPE_REMOVE_WORD) {
    const newWords = state.filter((item) => {
      if (item.id === action.word.id) {
        return false;
      }
      return true;
    });
    return newWords;
  }
  return state;
}