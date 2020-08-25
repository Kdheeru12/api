# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class DtUser(models.Model):
    id = models.IntegerField(blank=True, primary_key=True)
    schoolname = models.CharField(max_length=32, blank=True, null=True)
    address = models.CharField(max_length=32, blank=True, null=True)
    city = models.CharField(max_length=32, blank=True, null=True)
    mobile = models.IntegerField(blank=True, null=True)
    verification_code = models.IntegerField(blank=True,null=True)

    class Meta:
        managed = False
        db_table = 'dt_user'

