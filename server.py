from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer

HOST = "127.0.0.1"
PORT = 8000

if __name__ == "__main__":
    with TCPServer((HOST, PORT), SimpleHTTPRequestHandler) as httpd:
        print(f"Serving on http://{HOST}:{PORT}")
        httpd.serve_forever()
