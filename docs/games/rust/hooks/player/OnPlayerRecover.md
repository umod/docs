---
hide_table_of_contents: true
---

# OnPlayerRecover

## Usage

* Called when the player is about to recover from the 'wounded' state
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnPlayerRecover(BasePlayer player)
{
    Puts("OnPlayerRecover works!");
    return null;
}
```
