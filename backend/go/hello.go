package main

import (
	"fmt"
	"net/http"
)

func main() {
	fmt.Println("Hello, world.")
	
	// var url string = "https://google.com"
	// response, err := http.Get(url)
	// if err != nil {
	// 	log.Fatal("Went wrong, sorry")
	// }
	// body, err := ioutil.ReadAll(response.Body)
	// sb := string(body)
	// fmt.Println(sb)

	http.HandleFunc("/hello", hello)

	http.ListenAndServe(":8090", nil)
}


func hello(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "Hello Vue frontend!")
}
