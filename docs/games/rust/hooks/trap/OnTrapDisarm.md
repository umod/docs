---
hide_table_of_contents: true
---

# OnTrapDisarm

## Usage

* Called when the player disarms a land mine
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnTrapDisarm(Landmine trap, BasePlayer player)
{
    Puts("OnTrapDisarm works!");
    return null;
}
```
