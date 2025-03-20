fetch('https://fakestoreapi.com/products')
            .then(function(response) {
               
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch data');
                }
            })
            .then(function(data) {
                
                const tableBody = document.querySelector('#productTable tbody');

              
                for (let i = 0; i < data.length; i++) {
                    const product = data[i];
                    const row = document.createElement('tr');

                   
                    const cells = [
                        product.id,
                        product.title,
                        product.price,
                        product.category,
                        product.description,
                        `<img src="${product.image}" alt="${product.title}" style="width:50px; height:50px;">`
                    ];

                    
                    for (let j = 0; j < cells.length; j++) {
                        const cell = document.createElement('td');

                        
                        if (typeof cells[j] === 'string' && cells[j].startsWith('<img')) {
                           
                            cell.innerHTML = cells[j];
                        } else {
                            
                            cell.textContent = cells[j];
                        }

                        row.appendChild(cell);
                    }

                   
                    tableBody.appendChild(row);
                }
            })
            .catch(function(error) {
                console.error('Error fetching data:', error);
            });