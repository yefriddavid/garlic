package service

import "context"
import "fmt"

// UsersService describes the service.
type UsersService interface {
	// Add your methods here
	Create(ctx context.Context, email string) error
}

type basicUsersService struct{}

func (b *basicUsersService) Create(ctx context.Context, email string) (e0 error) {
	// TODO implement the business logic of Create
	fmt.Println("Here is users!");
	fmt.Println("Param email!");
	fmt.Println(email);
	return e0
}

// NewBasicUsersService returns a naive, stateless implementation of UsersService.
func NewBasicUsersService() UsersService {
	return &basicUsersService{}
}

// New returns a UsersService with all of the expected middleware wired in.
func New(middleware []Middleware) UsersService {
	var svc UsersService = NewBasicUsersService()
	for _, m := range middleware {
		svc = m(svc)
	}
	return svc
}
