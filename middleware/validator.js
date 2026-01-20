import { body, param, validationResult } from "express-validator";

const addBookValidation = [
  body("title").trim().notEmpty().withMessage("Book title cannont be empty"),
  body("description")
    .trim()
    .notEmpty()
    .withMessage("Book description cannot be empty"),
  body("author").trim().notEmpty().withMessage("Book author cannot be empty"),
  body("publisher")
    .trim()
    .notEmpty()
    .withMessage("Book publisher cannot be empty "),
  body("publicationDate")
    .trim()
    .notEmpty()
    .withMessage("Published date cannot be empty")
    .isISO8601("Publication date should be in the format YYYY-MM-DD"),
  body("language")
    .trim()
    .notEmpty()
    .withMessage("Book language cannot be empty"),
  body("pages")
    .trim()
    .notEmpty()
    .withMessage("Book pages cannot be empty")
    .isInt({ min: 1, max: 10000 })
    .withMessage("Number of pages must be between 1 and 10000"),
  body("ISBN_10")
    .trim()
    .notEmpty()
    .withMessage("ISBN-10 cannot be empty")
    .isISBN(10)
    .withMessage("Invalid ISBN-10"),
  ,
  body("ISBN_13")
    .trim()
    .notEmpty()
    .withMessage("ISBN-13 cannot be empty")
    .isISBN(13)
    .withMessage("Invalid ISBN-13"),
];

const mongoIdValidation = [
  param("id")
    .notEmpty()
    .withMessage("Book ID cannot be empty")
    .isMongoId()
    .withMessage("Invalid Mongo ID"),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map((error) => ({
        field: error.path,
        message: error.msg,
      })),
    });
  }
  next();
};

export { addBookValidation, handleValidationErrors, mongoIdValidation };
