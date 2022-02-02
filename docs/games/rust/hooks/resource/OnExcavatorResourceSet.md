---
hide_table_of_contents: true
---

# OnExcavatorResourceSet

## Usage

* Called when a player is trying to set a new resource target
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnExcavatorResourceSet(ExcavatorArm arm, string resourceName, BasePlayer player)
{
    Puts("OnExcavatorResourceSet works!");
    return null;
}
```
