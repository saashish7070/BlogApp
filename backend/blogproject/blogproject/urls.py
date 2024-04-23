from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from myblog import views

router = routers.DefaultRouter()
router.register(r'Posts', views.PostView, 'post')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    # Add URL patterns for post detail view and create post view
    path('api/Posts/<int:pk>/', views.PostDetailView.as_view(), name='post-detail'),
    path('api/CreatePost/', views.CreatePost.as_view(), name='create-post'),
]
