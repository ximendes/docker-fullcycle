FROM golang:1.8 as build

WORKDIR /app

COPY meugo.go .

# Removing debug informations and compile only for linux target and disabling cross compilation.
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -ldflags="-w -s" -o meugo

CMD ./meugo


FROM scratch

COPY --from=build /app/meugo /go/bin/meugo
ENTRYPOINT ["/go/bin/meugo"]
