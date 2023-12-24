/// <reference types="cypress" />


describe ('all API requests tests', () => {
    
    
    it('GET request', () => {
        
        cy.request('https://jsonplaceholder.typicode.com/posts').then(response => {
            expect(response.status).to.eq(200)
            expect(response).not.be.null
            
        })      

    })

    it('POST request', () => {
        
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            title: 'QaTitle',
            body: 'test body',
            userId: 55,
          }).then(response => {
            expect(response.status).to.eq(201)
            expect(response.statusText).to.eq('Created')

          })
            
    })

    it('PUT request', () => {
        
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
            id: 55,
            title: 'new QaTitle',
            body: 'new test body',
            userId: 1,
          }).then(response => {
            expect(response.status).to.eq(200)
          })
            
    })

    it('PATCH request', () => {
        
        cy.request('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
            title: 'latest QaTitle'
          }).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq('latest QaTitle')
          })
            
    })


    it('DELETE request', () => {
        
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').then(response => {
            expect(response.status).to.eq(200)
            expect(response).not.be.null

            console.log(response)
          })
            
    })


})