import { gql } from '@apollo/client';



export const getPostmenList_query = gql`
    query getPostmanList($filterBy: PostmanFilter, $page: Int, $size: Int) {
        listPostmen(filterBy: $filterBy, page:$page, size:$size) {
            items {
            id
            isActive
            name
            number
            role {
                id
                name
            }
            }
            page
            size
            total
        }
    }

`;