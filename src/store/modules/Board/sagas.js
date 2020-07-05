import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { searchSuccess } from './actions';
import { addCardSuccess } from './actions';

export function* getBoard() {
  try {
    const board = yield call(api.get, 'boards');

    yield put(searchSuccess('board', board.data));
  } catch (err) {
    toast.error('Um erro aconteceu: ', err);
  }
}

export function* getTags() {
  try {
    const tags = yield call(api.get, 'tags');

    yield put(searchSuccess('tags', tags.data));
  } catch (err) {
    toast.error('Um erro aconteceu: ', err);
  }
}

export function* getPeople() {
  try {
    const people = yield call(api.get, 'people');

    yield put(searchSuccess('people', people.data));
  } catch (err) {
    toast.error('Um erro aconteceu: ', err);
  }
}

export function* addCard({ payload }) {
  try {
    const { card, listIndex } = payload;

    const board = yield call(api.get, 'boards');
    const { cards } = board.data[0].columns[listIndex];
    const lastCard = cards.slice(-1);
    console.log('id: ', lastCard[0].id);

    const newList = [
      ...cards,
      { id: lastCard[0].id + 1, title: card, tags: [] },
    ];
    board.data[0].columns[listIndex].cards = newList;
    console.log(board);
    const res = yield call(api.post, 'boards', board);

    console.log(res);
    // // yield put(addCardSuccess(newList));
  } catch (err) {
    toast.error('Um erro aconteceu: ', err);
  }
}

export default all([
  takeLatest('@trelloClone/SEARCH_REQUEST', getBoard),
  takeLatest('@trelloClone/SEARCH_REQUEST', getTags),
  takeLatest('@trelloClone/SEARCH_REQUEST', getPeople),
  takeLatest('@trelloClone/ADD_CARD_REQUEST', addCard),
]);
