---
hide_table_of_contents: true
---

# OnPlayerRecover

## Usage

* Called when the player is about to recover from the 'wounded' state
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnPlayerRecover(BasePlayer player)
{
    Puts("OnPlayerRecover works!");
    return null;
}
```
