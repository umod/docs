---
hide_table_of_contents: true
---

# OnRfBroadcasterRemove

## Usage

* Called right before an object stops broadasting an RF frequency
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnRfBroadcasterRemove(IRFObject obj, int frequency)
{
    Puts("OnRfBroadcasterRemove works!");
    return null;
}
```
