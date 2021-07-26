const Data = require("../models/Data");

exports.postAddData = (req, res, next) => {
  const Type = req.body.Type;
  const Date = req.body.Date;
  const Categories = req.body.Categories;
  const Divisions = req.body.Divisions;
  const Description = req.body.Description;
  const Cash = req.body.Cash;

  const data = new Data({
    Type: Type,
    Date: Date,
    Categories: Categories,
    Divisions: Divisions,
    Description: Description,
    Cash: Cash,
  });
  data
    .save()
    .then((res) => {
      res.json({ message: res });
      console.log(res);
    })
    .catch((err) => console.log(err));
};

exports.queryData = (req, res, next) => {
  const Categories = req.body.Categories;
  const Divisions = req.body.Divisions;

  Data.find()
    .then((data) => {
      const query = data.filter((res) => {
        if (res.Categories === Categories && res.Divisions === Divisions) {
          return res;
        }
      });

      const Inc = query.filter((exp) => {
        if (exp.Type === "Income") {
          return exp;
        }
      });
      const Exp = query.filter((exp) => {
        if (exp.Type === "Expense") {
          return exp;
        }
      });
      const TotalIncome = Inc.reduce((a, b) => {
        return a + b.Cash;
      }, 0);
      const TotalExpense = Exp.reduce((a, b) => {
        return a + b.Cash;
      }, 0);

      query.length > 0
        ? res.json({
            Message: [{ TotalIncome: TotalIncome, TotalExpense: TotalExpense }],
          })
        : res.json({ Message: [{ TotalIncome: 0, TotalExpense: 0 }] });
    })
    .catch((err) => console.log(err));
};
