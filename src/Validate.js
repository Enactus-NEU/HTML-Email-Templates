const Validate = function(input) {
    input = input.replace(/&/g, '&amp;');
    input = input.replace(/"/g, '&quot;');
    input = input.replace(/</g, '&lt;');
    input = input.replace(/>/g, '&gt;');
    return input;
}

export default Validate;