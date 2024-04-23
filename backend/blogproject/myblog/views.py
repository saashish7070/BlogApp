from django.shortcuts import render
from rest_framework import viewsets, generics
from .models import Post
from .serialize import PostSerializer

class PostView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

class PostDetailView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'pk'

class CreatePost(generics.CreateAPIView):
    serializer_class = PostSerializer

    def post(self, request, *args, **kwargs):
        request.data['date'] = request.data.get('date', None)  # Ensure date is included in request data
        return super().post(request, *args, **kwargs)