export const fetchCategories = () => fetch(`http://localhost:3001/categories`, { headers: { 'Authorization': 'whatever-you-want' },
        credentials: 'include' } )
      .then( (res) => { return(res.json().categories) })

export const changeVoteScore = (id, voteType) => fetch(`http://localhost:3001/posts/:id`,
	{ method: 'POST',
	  headers: { 'Authorization': 'whatever-you-want' }})
      .then( (res) => { return(res.json().categories) })