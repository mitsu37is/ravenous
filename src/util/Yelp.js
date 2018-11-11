require('dotenv').config();
const apiKey = process.env.REACT_APP_YELP_API_KEY;
const Yelp = {
    search(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                'headers': {
                    Authorization: `Bearer ${apiKey}`
                }
            }
        ).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.address,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zip_code,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        })
    }
};

export default Yelp;