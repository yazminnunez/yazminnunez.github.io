class Http {


    async get(url,id) {
        try {
            return await fetch(url+(id||''),{ method: 'get' }).then(r => r.json())
        }
        catch( error ) {
            console.error('FETCH GET ERROR: ', error)
        }
    }

    
    async  post(url,dato) {
        try {
            return await fetch(url,{ 
                method: 'post',
                body: JSON.stringify(dato),
                headers : { 'content-type':'application/json' }
            }).then(r => r.json())
        }
        catch( error ) {
            console.error('FETCH POST ERROR: ', error)
        }
    }

    async put(url,id, dato) {
        try {
            return await fetch(url+id,{ 
                method: 'put',
                body: JSON.stringify(dato),
                headers : { 'content-type':'application/json' }
            }).then(r => r.json())
        }
        catch( error ) {
            console.error('FETCH PUT ERROR: ', error)
        }
    }

    
    async delete(url,id) {
        try {
            return await fetch(url+id,{ 
                method: 'delete'
            }).then(r => r.json())
        }
        catch( error ) {
            console.error('FETCH DELETE ERROR: ', error)
        }
    }

}

const http = new Http()
