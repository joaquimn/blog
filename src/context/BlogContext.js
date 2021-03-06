import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `BlogPost #${state.length + 1}` }];

        case 'edit_blogpost':


        case 'delete_blogpost':


        case 'read_blogpost':

        default:
            return state;
    }
};


const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogpost' });
    };
};


export const { Context, Provider } = createDataContext(blogReducer,
    { addBlogPost },
    []
);