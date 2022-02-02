---
hide_table_of_contents: true
---

# OnExcavatorGather

## Usage

* Called right before moving gathered resource to container
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnExcavatorGather(ExcavatorArm arm, Item item)
{
    Puts("OnExcavatorGather works!");
    return null;
}
```
