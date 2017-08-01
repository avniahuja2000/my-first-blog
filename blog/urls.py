from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.post_list, name='post_list'),
    url(r'^portfolio/', views.portfolio, name='portfolio'),
    url(r'^extracurriculars/', views.extracurriculars, name='extracurriculars'),
    url(r'^coding/', views.coding, name='coding'),
]
