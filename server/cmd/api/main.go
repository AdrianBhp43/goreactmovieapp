package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"
)

const version = "1.0.0"

type config struct {
	port int
	env  string
}

type AppStatus struct {
	Status      string `json:"status"`
	Environment string `json:"environment"`
	Version     string `json:"version"`
}

type application struct {
	config config
	logger *log.Logger
}

func main() {
	var cfg config

	flag.IntVar(&cfg.port, "port", 4000, "Server port to listen on ")
	flag.StringVar(&cfg.env, "env", "development", "application environment (development|production)")
	flag.Parse()

	logger := log.New(os.Stdout, "", log.Ldate|log.Ltime)

	app := &application{
		config: cfg,
		logger: logger,
	}

	fmt.Println("Server is running...")

	// http.HandleFunc("/status", func(rw http.ResponseWriter, r *http.Request) {
	// 	currentStatus := AppStatus{
	// 		Status:      "Online",
	// 		Environment: cfg.env,
	// 		Version:     version,
	// 	}

	// 	res, err := json.MarshalIndent(currentStatus, "", "\t")
	// 	if err != nil {
	// 		fmt.Println(err)
	// 	}

	// 	rw.Header().Set("Content-Type", "application/json")
	// 	rw.WriteHeader(http.StatusOK)
	// 	rw.Write(res)
	// })

	//err := http.ListenAndServe(fmt.Sprintf(":%d", cfg.port), nil)
	serve := &http.Server{
		Addr:         fmt.Sprintf(":%d", cfg.port),
		Handler:      app.routes(),
		IdleTimeout:  time.Minute,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 30 * time.Second,
	}

	logger.Printf("Starting server on port", cfg.port)

	err := serve.ListenAndServe()
	if err != nil {
		log.Println(err)

	}
}
