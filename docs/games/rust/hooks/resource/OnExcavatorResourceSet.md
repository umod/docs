---
hide_table_of_contents: true
---

# OnExcavatorResourceSet

## Usage

* Called when a player is trying to set a new resource target
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnExcavatorResourceSet(ExcavatorArm arm, string resourceName, BasePlayer player)
{
    Puts("OnExcavatorResourceSet works!");
    return null;
}
```
