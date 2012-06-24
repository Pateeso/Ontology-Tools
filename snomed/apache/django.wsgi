Port=8888
import os
import sys
path='/data/sites/ontology'
if path not in sys.path:
	sys.path.insert(0,path)
os.environ['DJANGO_SETTINGS_MODULE']='snomed.settings'
import django.core.handlers.wsgi
application=django.core.handlers.wsgi.WSGIHandler()

from socketio.server import SocketIOServer
if __name__ == '__main__':
	SocketIOServer(('',Port),namespace='socket.io').serve_forever()

