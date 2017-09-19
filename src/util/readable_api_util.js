export const fetchCategories = () => fetch(`http://localhost:3001/categories`, { headers: { 'Authorization': 'whatever-you-want' },
        credentials: 'include' } )
      .then( (res) => { return(res.json().categories) })