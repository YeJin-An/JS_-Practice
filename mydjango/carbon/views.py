from .models import Carbon
from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import CarbonSerializer

class CarbonList(APIView):

    def post(self, request, format=None):
        serializer = CarbonSerializer(data=request.data)
        if serializer.is_valid() :
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, format=None):
        queryset = Carbon.objects.all()
        serializer = CarbonSerializer(queryset, many=True)
        return Response(serializer.data)
 
class CarbonDetail(APIView) :
    def get_object(self, pk):
        try :
            return Carbon.objects.get(pk=pk)
        except :
            raise Http404
 
    def get(self, request, pk):
        movie = self.get_object(pk)
        serializer = CarbonSerializer(movie)
        return Response(serializer.data)
 
    def put(self, request, pk, format=None):
        movie = self.get_object(pk)
        serializer = CarbonSerializer(movie, data=request.data)
        if serializer.is_valid() :
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
    def delete(self, request, pk, format=None):
        movie = self.get_object(pk)
        movie.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)