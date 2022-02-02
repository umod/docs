---
hide_table_of_contents: true
---

# OnRfListenerAdd

## Usage

* Called right before an object starts listening to an RF frequency
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnRfListenerAdd(IRFObject obj, int frequency)
{
    Puts("OnRfListenerAdd works!");
    return null;
}
```
