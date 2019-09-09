     
$(document).ready( function () {
   showNewField();
});

 function showNewField(){
 $('#EventType').on('change', function () {
        $('#visitDateWrapper, #visitListWrapper').hide();
        $('#visitDateWrapper input, #visitListWrapper select').removeAttr('required').val('');
        if ($(this).val() && $(this).val() == 'Offered Monday-Friday: Personalized Visit') {
            $('#visitDateWrapper').show();
            $('#visitDateWrapper input').attr('required', true);
        } else if ($(this).val()) {
            $('#visitListWrapper').show();
            $('#visitListWrapper select').attr('required', true);
        }
    });
    $('#VisitDate').datepicker();
}
