from django.urls import path

from. import views

urlpatterns = [
    path('', views.index, name='index'),
    path('CJH/', views.CJH, name="CJH"),
    path('JJW/', views.JJW, name="JJW"),
    path('KCW/', views.KCW, name="KCW"),
    path('KHC/', views.KHC, name="KHC"),
    path('KJH/', views.KJH, name="KJH"),
    path('KJE/', views.KJE, name="KJE"),
    path('KMJ/', views.KMJ, name="KMJ"),
    path('LEA/', views.LEA, name="LEA"),
    path('LMH/', views.LMH, name="LMH"),
    path('LYB/', views.LYB, name="LYB"),
    path('PJY/', views.PJY, name="PJY"),
    path('SBD/', views.SBD, name="SBD"),
    path('WIA/', views.WIA, name="WIA"),
    path('KJW/', views.KJW, name="KJW"),
    path('LMJ/', views.LMJ, name="LMJ"),
]