describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });


  it('2 + 2 should be 4', function(){
      var result = add(2,2);
      expect(result).toBe(4);
  })
});
    