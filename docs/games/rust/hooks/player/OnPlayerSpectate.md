---
hide_table_of_contents: true
---

# OnPlayerSpectate

## Usage

* Called when the player starts spectating
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnPlayerSpectate(BasePlayer player, string spectateFilter)
{
    Puts("OnPlayerSpectate works!");
    return null;
}
```
