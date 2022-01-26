---
hide_table_of_contents: true
---

# OnFindBurnable

## Usage

* Called when looking for fuel for the oven
* Returning an Item overrides default behavior

## Examples

```csharp title=""
Item OnFindBurnable(BaseOven oven)
{
    Puts("OnFindBurnable works!");
    return null;
}
```
