import { ADD_ARTICLE } from '../constants/action-types';

const forbiddenWords = ['parola1', 'parola2'];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next){
        return function(action){
            if(action.type === ADD_ARTICLE){
                const foundWord = forbiddenWords.filter( word =>
                    action.payload.titolo.includes(word)
                    );
                    console.log(foundWord);
                if(foundWord.length){
                    return dispatch({ type: 'FOUND_BAD_WORD'});
                }
            }
            return next(action);
        }
    }
}
