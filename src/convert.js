export function convertText(text) {
  let lines = text.split("\n");
  let data = lines.map((line) => {
    return line.split("\t");
  });
  let dropped_data = dropNullColumn(data);
  return toMarkdown(dropped_data);
}

function dropNullColumn(data) {
  let t_data = transpose(data);
  let filtered_t_data = t_data.filter((col) => {
    let result = col.reduce((x, y) => {
      return x + y;
    }, "");
    console.dir(result);
    return result !== "" && result !== undefined && result !== "undefined";
  });
  return transpose(filtered_t_data);
}

function transpose(a) {
  return Object.keys(a[0]).map(function (c) {
    return a.map(function (r) {
      return r[c];
    });
  });
}

function toMarkdown(data) {
  let lines = data.map((row) => {
    return "|" + row.join("|") + "|";
  });
  let head = "|-".repeat(data[0].length) + "|";
  lines.splice(1, 0, head);
  return lines.join("\n");
}
