assertEqual(expected, actual);

assertEqual("abc", my.string);

assertEqual("A long string", my.longString);

assertEqual(["an", "array"], my.array);

assertEqual({ an: "object" }, my.object);

assertEqual({ and: "also",
              multiline: "objects"
            }, my.second_object);

