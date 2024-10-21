from django.contrib import admin
from .models import Chat
# Register your models here.

# class ChatAdmin(admin.ModelAdmin):
#     list_display = ['send_message', 'send_image', 'sent_date']
#     search_fields = ['user']


#     def __str__(self):
#         return self.user
    
admin.site.register(Chat)    

# admin.site.register(ChatAdmin, Chat)    