import $ from 'jquery';
import 'autocomplete.js/dist/autocomplete.jquery';
import "../../styles/algolia-autocomplete.scss";

export default function ($elements, dataKey, displayKey) {
    $(document).ready(function () {
        $('.js-user-autocomplete').each(function () {
            var autocompleteUrl = $(this).data('autocomplete-url');

            $(this).autocomplete({hint: false}, [
                {
                    source: function (query, cb) {
                        $.ajax({
                            url: autocompleteUrl + '?query=' + query
                        }).then(function (data) {
                            if (dataKey){
                                data[dataKey];
                            }
                            cb(data);
                        });
                    },
                    displayKey: displayKey,
                    debounce: 500 // only request every 1/2 second
                }
            ])
        });
    })
};
