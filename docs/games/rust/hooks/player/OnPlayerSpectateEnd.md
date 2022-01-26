---
hide_table_of_contents: true
---

# OnPlayerSpectateEnd

## Usage

* Called when the player stops spectating
* Returning a non-null value stops the spectate from ending

## Examples

```csharp title=""
object OnPlayerSpectateEnd(BasePlayer player, string spectateFilter)
{
    Puts("OnPlayerSpectateEnd works!");
    return null;
}
```
