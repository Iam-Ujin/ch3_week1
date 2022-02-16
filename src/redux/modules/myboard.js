// myboard.js

// Actions
const LOAD = "myboard/LOAD";
const CREATE = "myboard/CREATE";
const UPDATE = "myboard/UPDATE";
const REMOVE = "myboard/REMOVE";

const initailState = {
  list: [
    { word: " 쯔쯔", desc: "우리집 고양이", exam: "쯔쯔는 츄르를 좋아해" },
    {
      word: " 전어",
      desc: "유진이 별명",
      exam: "유진이는 고등학생 때 전어라고 불렸다",
    },
    {
      word: " 리액트",
      desc: "자바스크립트 라이브러리",
      exam: "리액트는 너무 어려어",
    },
  ],
};

// Action Creators
export function loadCard(card_data) {
  return { type: LOAD, card_data };
}

export function createCard(card_data) {
  return { type: CREATE, card_data };
}

export function updateCard(card_data) {
  return { type: UPDATE, card_data };
}

export function removeCard(card_index) {
  return { type: REMOVE, card_index };
}

// // middlewares
// export const loadCardFB = () => {
//   return async function (dispatch) {
//     const card_data = await getDocs(collection(db, "card"));

//     let card_list = [];
//     card_data.forEach((doc) => {
//       card_list.push({ id: doc.id, ...doc.data() });
//     });

//     dispatch(loadCard(card_list));
//   };
// };

// export const addCardFB = (input_text) => {
//   return async function (dispatch) {
//     const docRef = await addDoc(collection(db, "card"), input_text);
//     const _card_data = await getDoc(docRef);
//     const card_data = { id: _card_data.id, ..._card_data.data() };
//     console.log(card_data);

//     dispatch(addCard(card_data));
//   };
// };

// export const updateCardFB = (card_id, card_list) => {
//   return async function (dispatch) {
//     const docRef = doc(db, "card", card_id);
//     console.log(docRef);
//     await updateDoc(docRef, card_list);
//     dispatch(loadCardFB(card_list));
//   };
// };

// export const removeCardFB = (card_id) => {
//   return async function (dispatch, getState) {
//     if (!card_id) {
//       window.alert("아이디가 없습니다.");
//       return;
//     }
//     const docRef = doc(db, "card", card_id);
//     await deleteDoc(docRef);
//     console.log(docRef.id);
//     console.log(getState());

//     const _card_list = getState().myboard.list;
//     console.log(_card_list);
//     const card_index = _card_list.findIndex((b) => {
//       return b.id === card_id;
//     });
//     console.log(card_index);
//     dispatch(loadCardFB());
//   };
// };
// }

// Reducer
export default function reducer(state = initailState, action = {}) {
  switch (action.type) {
    case "myboard/LOAD": {
      console.log(action);
      return { list: action.card_data };
    }

    case "myboard/CREATE": {
      const new_card_list = [...state.list, action.card_data];
      return { list: new_card_list };
    }

    // case "myboard/UPDATE": {
    //   const new_card_list = [...state.list, action.card_data];
    //   return { list: new_card_list };
    // }

    case "myboard/REMOVE": {
      console.log(action);
      const new_card_list = state.list.filter((l, idx) => {
        return parseInt(action.card_index) !== idx;
      });
      return { list: new_card_list };
    }
    // do reducer stuff
    default:
      return state;
  }
}
