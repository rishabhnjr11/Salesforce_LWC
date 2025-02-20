public without sharing class NoteTakingController {
    @AuraEnabled
    public static Boolean createNoteRecord(String title, String description){
        try{
            if(!String.isBlank(title)){
                My_Note__c noteRec = new My_Note__c(Name=title, Note_Description__c=description);
                insert noteRec;
                return true;
            }
            return false;
        }
        catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable = true)
    public static List<My_Note__c> getNotes(){
        return [select id, Name, Note_Description__c,LastModifiedDate from My_Note__c order by LastModifiedDate];

    }

    @AuraEnabled
    public static Boolean updateNoteRecord(String noteId, String title, String description){
        try {
            if(!String.isBlank(noteId)){
                My_Note__c note = [select id, name, Note_Description__c from My_Note__c where id =:noteId];
                note.Name = title;
                note.Note_Description__c = description;
                update note;
                return true;
            }
            return false;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static Boolean deleteNote(String noteId){
        try {
            if(!String.isBlank(noteId)){
                My_Note__c noteRec = [select id, name, Note_Description__c from My_Note__c where id =:noteId];
                delete noteRec;
                return true;
            }
            return false;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}