package helpers

import (
	"go.mongodb.org/mongo-driver/bson"
)

func ReverseBsonM(data []bson.M) []bson.M {
	reversedBsonM := make([]bson.M, len(data))
	for i, j := 0, len(data)-1; i < len(data); i, j = i+1, j-1 {
		reversedBsonM[i] = data[j]
	}
	return reversedBsonM
}
