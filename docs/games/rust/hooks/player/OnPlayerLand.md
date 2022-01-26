---
hide_table_of_contents: true
---

# OnPlayerLand

## Usage

* Called just before the player lands on the ground
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnPlayerLand(BasePlayer player, float num)
{
    Puts("OnPlayerLand works!");
    return null;
}
```
