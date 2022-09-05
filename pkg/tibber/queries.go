package tibber

import "github.com/hasura/go-graphql-client"

// var homes struct {
// 	Homes struct {
// 		Name   graphql.String
// 		Height graphql.Float `graphql:"height(unit: METER)"`
// 	} `graphql:"human(id: \"1000\")"`
// }

// homes {
// 	address {
// 	  address1
// 	  address2
// 	  address3
// 	  postalCode
// 	  city
// 	  country
// 	  latitude
// 	  longitude
// 	}
//   }

// {
// 	viewer {
// 	  name
// 	}
//   }

var loggedInUserQuery struct {
	Viewer struct {
		Name graphql.String
	}
}
