---
hide_table_of_contents: true
---

# OnTrapDisarm

## Usage

* Called when the player disarms a land mine
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnTrapDisarm(Landmine landmine, BasePlayer player)
{
    Puts("OnTrapDisarm works!");
    return null;
}
```
